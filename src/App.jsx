import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomContainer from './component/CustomContainer'

const quests = [
  { id:1,
    question:"How do I reset my password?",
    answer:"To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your registered email to set a new password.",
    completed:false,
  },
  {  id:2,
    question:"What payment methods do you accept?",
    answer:"We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. You can find all available payment options during the checkout process.",
    completed:false,
  },
  {  id:3,
    question:"Can I return or exchange a product?",
    answer:"Yes, we offer a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can initiate a return or exchange within 30 days of receiving the product. Please check our Returns & Exchanges page for more details.",
    completed:false,
  },
  {  id:4,
    question:" How long does shipping take?",
    answer:"Shipping times depend on your location and the shipping method selected during checkout. Typically, domestic orders are delivered within 3-7 business days, while international orders may take 7-14 business days. You'll receive a tracking number once your order is shipped.",
    completed:false,
  },
  {  id:5,
    question:" Is my personal information secure?",
    answer:"Yes, we take data security seriously. We use industry-standard encryption and follow best practices to safeguard your personal information. We do not share your data with third parties without your consent. For more details, please read our Privacy Policy.",
    completed:false,
  },
];

function App() {
  const [myList, setMyList] =useState(quests)
  
  const[checked, setChecked] =useState(false)
   

  function  showIndex (index) {
      if (checked === index) {
          setChecked(true)
      }else{
          setChecked(false)
      }
    }
  return (
    <div className='App'>
      <div className="container">
  {quests.map((quest, index) => {
    return (
      <CustomContainer
        key={index}
        {...quest}
       showIndex={showIndex}
       checked={checked}
       index={index}
      />
    );
  })}
</div>
  </div>
  )
 
}

export default App
