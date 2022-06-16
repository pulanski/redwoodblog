export const timeTagTime = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toLocaleTimeString()}
      </time>
    )
  )
}

export const timeTagDate = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toLocaleDateString()}
      </time>
    )
  )
}
