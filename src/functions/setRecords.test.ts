import { ANS } from '..'
import setup from '../tests/setup'
import { hexEncodeName } from '../utils/hexEncodedName'
import { namehash } from '../utils/normalise'

let ensInstance: ANS
let revert: Awaited<ReturnType<typeof setup>>['revert']

beforeAll(async () => {
  ;({ ensInstance, revert } = await setup())
})

afterAll(async () => {
  await revert()
})

describe('setRecords', () => {
  it('should return a transaction to the resolver and set successfully', async () => {
    const tx = await ensInstance.setRecords('test123.arb', {
      records: {
        coinTypes: [
          { key: 'ETC', value: '0x42D63ae25990889E35F215bC95884039Ba354115' },
        ],
        texts: [{ key: 'foo', value: 'bar' }],
      },
      addressOrIndex: 1,
    })
    expect(tx).toBeTruthy()
    await tx.wait()

    const universalResolver =
      await ensInstance.contracts!.getUniversalResolver()!
    const publicResolver = await ensInstance.contracts!.getPublicResolver()!
    const encodedText = await universalResolver['resolve(bytes,bytes)'](
      hexEncodeName('test123.arb'),
      publicResolver.interface.encodeFunctionData('text', [
        namehash('test123.arb'),
        'foo',
      ]),
    )
    const encodedAddr = await universalResolver['resolve(bytes,bytes)'](
      hexEncodeName('test123.arb'),
      publicResolver.interface.encodeFunctionData('addr(bytes32,uint256)', [
        namehash('test123.arb'),
        '61',
      ]),
    )
    const [resultText] = publicResolver.interface.decodeFunctionResult(
      'text',
      encodedText[0],
    )
    const [resultAddr] = publicResolver.interface.decodeFunctionResult(
      'addr(bytes32,uint256)',
      encodedAddr[0],
    )
    expect(resultText).toBe('bar')
    expect(resultAddr).toBe(
      '0x42D63ae25990889E35F215bC95884039Ba354115'.toLowerCase(),
    )
  })
})
