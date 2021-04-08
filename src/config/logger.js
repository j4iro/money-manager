const { createLogger, format, transports } = require('winston')
const { config } = require('../config/config')

const formatCustom = format.combine(
            format.splat(),
            format.simple(),
            format.timestamp(),
            format.printf((info) => {
              return `[${info.timestamp}] ${info.level}: ${info.message}`
            })
          )

const logger = createLogger({
  transports: [
    new transports.File({
      format: formatCustom,
      level: config.NODE_ENV !== 'production' ? 'debug' : 'info',
      maxSize: config.maxSizeLogsFile,
      filename: require('path').join(config.mainLogs),
    }),
    new transports.File({
      format: formatCustom,
      level: 'error',
      maxSize: config.maxSizeLogsFile,
      filename: require('path').join(config.errorLogs),
    }),
  ],
})

if (config.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.splat(),
        // format.timestamp(),
        format.simple()
      ),
    })
  )
}

module.exports = logger
