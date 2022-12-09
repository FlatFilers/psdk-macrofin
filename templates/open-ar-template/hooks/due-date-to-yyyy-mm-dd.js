const dfns = require('date-fns')
/**
 * Helper function to determine if a value is null or undefined.
 * Useful in if/else statements or ternaries.
 *
 * @param {*} val - Any object/value
 */
const isNil = (val) => val === null || val === undefined || val === ''
/**
 * Helper function to determine if a value is NOT null or undefined.
 * Useful in if/else statements or ternaries.
 *
 * @param {*} val - Any object/value
 */
const isNotNil = (val) => !isNil(val)
module.exports = ({ recordBatch, _session, logger }) => {
  return recordBatch.records.map((record) => {
    const date = record.get('dueDate')

    if (isNotNil(date)) {
      if (Date.parse(date)) {
        const thisDate = dfns.format(new Date(date), 'yyyy-MM-dd')
        const realDate = dfns.parseISO(thisDate)
        if (dfns.isDate(realDate)) {
          record
            .set('dueDate', thisDate)
            .addComment('dueDate', 'Automatically formatted')
        }
      } else {
        record.addError('dueDate', 'Invalid date')
        logger.error('Invalid date')
      }
    }
  })
}
