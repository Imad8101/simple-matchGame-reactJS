import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  const activeButtonClass = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeButtonClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
