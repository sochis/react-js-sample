import { configureStore } from '@reduxjs/toolkit'

import { commonReducer } from './modules/common/state/reducers'

const store = configureStore({
  reducer: {
    common: commonReducer.reducer
  }
})

export default store
