// Write your code here.

import './index.css'

const Boxes = props => {
  const {designDetails} = props
  const {className, headerText, description} = designDetails

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Boxes
