type LoadingProps = {
  isHidden?: boolean;
  sectionRef?: React.RefObject<HTMLDivElement>;
};

const Loading = ({ isHidden, sectionRef }: LoadingProps) => {
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
