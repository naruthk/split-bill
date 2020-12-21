export function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { items: [ ...items, state.item ] }
    case 'remove':
      const updatedArrayWIthoutItem = items.filter(item => {
        return item.id !== state.item.id
      })
      return { items: updatedArrayWIthoutItem }
    default:
      throw new Error();
  }
}
