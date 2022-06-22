import classNames from "classnames"
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const data = [
  { que: 'What is Directory Listing?', ans: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.' },
  { que: 'Do I have to commit to a yearly subscription?', ans: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.' },
  { que: 'How much time does it take to get approval?', ans: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.' },
  { que: 'Can I create a free listing?', ans: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.' },
  { que: 'How many different listings can I make?', ans: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.' },
  { que: 'What if I want to delete the listing?', ans: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.' },
  { que: 'How do I sign up to get a directory listing added?', ans: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.' },
  { que: 'What are the other features the Directory Listing have?', ans: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.' },

]

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(0)
  return <>
    <div className="faq-container bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="faq-lists">
              {data.map((item, key) => <div key={key} className={classNames("faq", { active: activeFaq === key })}>
                <div onClick={() => setActiveFaq(key)} className="faq-icon">
                  {activeFaq === key ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                <div className="faq-content">
                  <div onClick={() => setActiveFaq(key)} className="que">{item.que}</div>
                  <div className="ans">{item.ans}</div>
                </div>
              </div>)}

            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

      </div>
    </div>
  </>
}

export default FaqSection