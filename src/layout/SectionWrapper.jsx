const SectionWrapper = ({ children, className }) => {
  return (
    <section
      className={`max-w-6xl mx-auto py-8 ${className}`}
      style={{ width: '95%' }}
    >
      {children}
    </section>
  )
}

export { SectionWrapper }
