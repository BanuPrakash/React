import React from 'react'

export default function ContactView({contact,delEvt}) {
  return (
    <div>
        {contact.email}, {contact.name} <button type="button" onClick={()=> delEvt(contact.email)}>Delete</button>
    </div>
  )
}
