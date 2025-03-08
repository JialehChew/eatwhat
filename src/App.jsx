import { useState } from 'react'
import './App.css'

function App() {
  const [params, setParams] = useState({
    weather: '',
    mood: '',
    isWorkday: '',
    mealTime: '',
    sleepQuality: ''
  })
  const [showResult, setShowResult] = useState(false)

  const handleParamChange = (param, value) => {
    setParams(prev => ({
      ...prev,
      [param]: value
    }))
  }

  const handleSubmit = () => {
    if (Object.values(params).every(value => value !== '')) {
      setShowResult(true)
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="./assets/deity-new.svg" alt="赫尔墨斯神像" className="deity-icon" />
        <h1>赫尔墨斯·鸡饭神殿</h1>
        <p className="subtitle">古希腊掌管鸡饭的神明将为您指引今日美食</p>
      </header>

      <div className="main-content">
        {!showResult ? (
          <div className="param-section">
            <div className="param-group">
              <label>今日天气</label>
              <select value={params.weather} onChange={(e) => handleParamChange('weather', e.target.value)}>
                <option value="">请选择...</option>
                <option value="sunny">晴朗</option>
                <option value="rainy">下雨</option>
                <option value="cloudy">多云</option>
                <option value="windy">有风</option>
              </select>
            </div>

            <div className="param-group">
              <label>心情如何</label>
              <select value={params.mood} onChange={(e) => handleParamChange('mood', e.target.value)}>
                <option value="">请选择...</option>
                <option value="happy">开心</option>
                <option value="sad">难过</option>
                <option value="excited">兴奋</option>
                <option value="tired">疲惫</option>
              </select>
            </div>

            <div className="param-group">
              <label>是否工作日</label>
              <select value={params.isWorkday} onChange={(e) => handleParamChange('isWorkday', e.target.value)}>
                <option value="">请选择...</option>
                <option value="yes">是</option>
                <option value="no">否</option>
              </select>
            </div>

            <div className="param-group">
              <label>用餐时间</label>
              <select value={params.mealTime} onChange={(e) => handleParamChange('mealTime', e.target.value)}>
                <option value="">请选择...</option>
                <option value="breakfast">早餐</option>
                <option value="lunch">午餐</option>
                <option value="dinner">晚餐</option>
              </select>
            </div>

            <div className="param-group">
              <label>睡眠质量</label>
              <select value={params.sleepQuality} onChange={(e) => handleParamChange('sleepQuality', e.target.value)}>
                <option value="">请选择...</option>
                <option value="good">很好</option>
                <option value="normal">一般</option>
                <option value="bad">糟糕</option>
              </select>
            </div>

            <button className="submit-btn" onClick={handleSubmit}>求问神谕</button>
          </div>
        ) : (
          <div className="result-section">
            <div className="oracle-message">
              <h2>神谕启示</h2>
              <p className="message">经过深思熟虑，赫尔墨斯建议您今天享用：</p>
              <div className="food-recommendation">
                <h3>鸡饭</h3>
                <p className="description">这道由神赐福的美食将为您带来力量与愉悦</p>
              </div>
              <button className="reset-btn" onClick={() => setShowResult(false)}>再次求问</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
