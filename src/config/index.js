const convict = require('convict');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
const env = process.env.NODE_ENV;
const envFile = env === 'test' ? '.env.test' : '.env';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const config = convict({
  /**
   * Server config
   */
  host: {
    doc: 'Server host name / IP',
    format: '*',
    default: '0.0.0.0',
  },
  port: {
    doc: 'Server port',
    format: 'port',
    env: 'PORT',
    default: 8080,
  },
  proxy: {
    doc: 'Server proxy',
    format: 'url',
    env: 'HTTP_PROXY',
    default: undefined,
  },

  /**
   * Application config
   */
  env: {
    doc: 'Application environment',
    format: ['development', 'test', 'production'],
    env: 'NODE_ENV',
    default: 'development',
  },
  logsDir: {
    doc: 'Application logs directory',
    format: String,
    default: `${__dirname}/../../logs`,
  },

  /**
   * Database config
   */
  db: {
    host: {
      doc: 'Database host name / IP',
      format: String,
      env: 'DB_HOST',
      default: null,
    },
    username: {
      doc: 'Database username',
      format: String,
      env: 'DB_USER',
      default: null,
    },
    password: {
      doc: 'Database password',
      format: String,
      env: 'DB_PASSWORD',
      default: null,
    },
    database: {
      doc: 'Database name',
      format: String,
      env: 'DB_NAME',
      default: null,
    },
  },
});

// Validate current config
config.validate({ allowed: 'strict' });

module.exports = {
  // Export plain config object
  ...config.getProperties(),

  // Export config related aliases
  isTest: env === 'test',
  isProduction: env === 'production',
};
