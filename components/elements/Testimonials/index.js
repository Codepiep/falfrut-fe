import {TestimonialCard} from './TestimonialCard';

const Testimonials = ({data}) => {
  return (
    <div className=" lg:max-h-[350px] overflow-y-scroll no-scrollbar lg:px-[180px] flex flex-wrap justify-center items-center content-start">
      {data.map((item, i) => (
        <TestimonialCard
          key={i}
          name={item.name}
          rating={item.rating}
          comment={item.comment}
        />
      ))}
    </div>
  );
};

export {Testimonials};
