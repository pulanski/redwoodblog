import ContactsCard from './ContactsCard'

export const generated = () => {
  return <ContactsCard />
}

export default {
  title: 'Components/ContactsCard',
  argTypes: {
    theme: { control: 'select', options: ['light', 'dark'] },
  },
}
