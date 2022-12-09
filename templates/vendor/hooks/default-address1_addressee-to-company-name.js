// Validate at least one member of a group of columns is present.
module.exports = async ({ recordBatch, session, logger }) => {
  await Promise.all(
    await recordBatch.records.map(async (record) => {
      if (!record.get('Address1_Addressee')) {
        record.set('Address1_Addressee', record.get('companyName'))
        record.addWarning(
          ['Address1_Addressee'],
          'Address1_Addressee has been set to Company Name'
        )
      }
    })
  )
}
