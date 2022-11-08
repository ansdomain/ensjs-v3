import { ANS } from '..'
import setup from '../tests/setup'

let ensInstance: ANS

beforeAll(async () => {
  ;({ ensInstance } = await setup())
})

describe('getSpecificRecord', () => {
  describe('getContentHash', () => {
    it('should return null for a non-existent name', async () => {
      const result = await ensInstance.getContentHash('test123123cool.arb')
      expect(result).toBeUndefined()
    })
    it('should return null for a name with no contenthash record', async () => {
      const result = await ensInstance.getContentHash('with-profile.arb')
      expect(result).toBeUndefined()
    })
    it('should return the contenthash for a name with the record set', async () => {
      const result = await ensInstance.getContentHash('with-contenthash.arb')
      expect(result).toMatchObject({
        protocolType: 'ipfs',
        decoded: 'bafybeico3uuyj3vphxpvbowchdwjlrlrh62awxscrnii7w7flu5z6fk77y',
        error: undefined,
      })
    })
  })

  describe('getText', () => {
    it('should return a record from a key', async () => {
      const result = await ensInstance.getText(
        'with-profile.arb',
        'description',
      )
      expect(result).toBe('Hello2')
    })

    it('should return null for a non-existent key', async () => {
      const result = await ensInstance.getText(
        'with-profile.arb',
        'thiskeydoesntexist',
      )
      expect(result).toBeUndefined()
    })
  })

  describe('getAddr', () => {
    it('should return the ETH addr record if no coinType is provided', async () => {
      const result = await ensInstance.getAddr('with-profile.arb')
      expect(result).toBe('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC')
    })
    it('should return the correct address based on a coin ID input as a number', async () => {
      const result = await ensInstance.getAddr('with-profile.arb', 61)
      expect((result as any).addr).toBe(
        '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
      )
      expect((result as any).coin).toBe('ETC')
    })
    it('should return the correct address based on a coin ID input as a string', async () => {
      const result = await ensInstance.getAddr('with-profile.arb', '61')
      expect((result as any).addr).toBe(
        '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
      )
      expect((result as any).coin).toBe('ETC')
    })
    it('should return the correct address based on a coin name', async () => {
      const result = await ensInstance.getAddr('with-profile.arb', 'ETC')
      expect((result as any).addr).toBe(
        '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
      )
      expect((result as any).coin).toBe('ETC')
    })
    it('should return null for a non-existent coin', async () => {
      const result = await ensInstance.getAddr('with-profile.arb', 'BNB')
      expect(result).toBeUndefined()
    })
  })
})
