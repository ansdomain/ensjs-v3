import { ANS } from '..'
import setup from '../tests/setup'

let ensInstance: ANS

beforeAll(async () => {
  ;({ ensInstance } = await setup())
})

describe('batchWrappers', () => {
  it('should batch calls together', async () => {
    const batch = await ensInstance.resolverMulticallWrapper.raw([
      await ensInstance._getText.raw('with-profile.arb', 'description'),
      await ensInstance._getText.raw('with-profile.arb', 'url'),
      await ensInstance._getAddr.raw('with-profile.arb'),
    ])
    const universalResponse = await ensInstance.universalWrapper(
      'with-profile.arb',
      batch.data,
    )
    const [batchDecoded] = await ensInstance.resolverMulticallWrapper.decode(
      universalResponse?.data,
    )
    const decoded1 = await ensInstance._getText.decode(batchDecoded[0])
    const decoded2 = await ensInstance._getText.decode(batchDecoded[1])
    const decoded3 = await ensInstance._getAddr.decode(batchDecoded[2])
    expect(decoded1).toBe('Hello2')
    expect(decoded2).toBe('twitter.com')
    expect(decoded3).toBe('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC')
  })
})
