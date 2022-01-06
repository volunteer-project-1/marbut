export const PORT = process.env.PORT || 3000
export const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'
export const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/UserDB'

export const DB_CONFIG =
  NODE_ENV === 'production'
    ? {
        dbName: 'production',
        autoIndex: false,
        autoCreate: false,
      }
    : {
        dbName: 'test',
      }

export const MONGO_CONFIG = {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}
