const Loading = (props: any) => {
  const { sectionRef, isHidden } = props;
  return (
    <section
      className={`${
        isHidden ? 'section-loading section--hidden' : 'section-loading '
      }`}
      ref={sectionRef}
    >
      <div className="container container-products">
        <h1>Loading...</h1>
      </div>
    </section>
  );
};

export default Loading;
