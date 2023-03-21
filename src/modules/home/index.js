import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { initialState, commonReducer, changeLanguage } from '../../modules/common/state/reducers'
import { DualButton } from '../../components/button/toggleButton'
import { HomeCard } from '../../components/card/card'

const HomeModule = () => {
  const [state, dispatch] = useReducer(commonReducer.reducer, initialState)
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <div className='p-5 text-end'>
        <DualButton
          alignment={state.language}
          leftButton={{
            value: 'en',
            text: 'English',
            handleChange: () => {
              dispatch(changeLanguage('en'))
              i18n.changeLanguage('en')
            }
          }}
          rightButton={{
            value: 'ja',
            text: '日本語',
            handleChange: () => {
              i18n.changeLanguage('ja')
            }
          }}
        />
      </div>
      <div className='py-5 text-center '>
        <p className='font-bold text-7xl'>{t('home.title')}</p>
      </div>
      <div className='flex py-20 justify-center items-center gap-x-20'>
        <HomeCard mainText={t('home.main.title')} subText={t('home.main.description')} handleChange={() => { navigate('/main') }} />
      </div>
    </React.Fragment >
  )
}

export default HomeModule
