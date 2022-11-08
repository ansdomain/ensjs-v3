import { ANS } from '..'
import setup, { deploymentAddresses } from '../tests/setup'

let ensInstance: ANS

beforeAll(async () => {
  ;({ ensInstance } = await setup())
})

describe('getResolver', () => {
  it('should find the resolver for a name with a resolver', async () => {
    const result = await ensInstance.getResolver('with-profile.arb')
    expect(result).toBe(deploymentAddresses.LegacyPublicResolver)
  })
})
