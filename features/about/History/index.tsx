import Responsive from "@components/Responsive";

const History = () => {
  return (
    <Responsive className="overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_-10%_50%,rgba(34,33,51,0.10)_0%,transparent_45%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-radial-gradient(circle_at_-10%_50%,rgba(34,33,51,0.05)_0px,rgba(34,33,51,0.05)_1px,transparent_1px,transparent_7px)] opacity-40" />
      <div className="relative z-10 flex flex-col md:flex-row gap-14">
        <h1 className="font-extralight">
          Our <br /> History
        </h1>
        <div className="flex flex-col gap-5">
          <p>
            Wilyanto is the 2nd generation of lumber industry, with his
            experience, He has decided to start PT Kayan Jaya Tanjung to be his
            own independent Lumber Factory in 1995 and located in Surabaya East
            Java - Indonesia. PT Kayan Jaya Tanjung first production was{" "}
            <span className="font-bold">
              Merbau Decking for Australian Market & Pines Finger Jointed
              Lamination Board for Japanese Market.
            </span>{" "}
            In supporting of his production at that time,He decided to build 10
            Kiln Dried chamber.
          </p>

          <p>
            <span className="font-bold">
              In 2002 Wilyanto has the opportunities to start another factory in
              Furniture production,
            </span>{" "}
            after careful planning and laying out the furniture production in
            the new factory,{" "}
            <span className="font-bold">
              PT Kayan Jaya Tanjung has successfully export the first container
              for US market till today.
            </span>
          </p>

          <p>
            Wilyanto has seek another opportunity, in 2010{" "}
            <span className="font-bold">
              PT Kayan Jaya Tanjung teamed up with another entity
            </span>{" "}
            to produce doors, door jamb and window and has been successfully
            involved in{" "}
            <span className="font-bold">
              major project around Java and Bali.
            </span>
          </p>

          <p>
            In the past 5 years, world timber markets have change the interest
            to timber engineer to be use for construction & almost joinery
            system on all timber products, with the experience in Finger Jointed
            Lamination, in 2020 PT Kayan Jaya Tanjung gained up the skills{" "}
            <span className="font-bold">
              by joining GLTAA (Glue Laminated Timber Association of Australia)
            </span>{" "}
            by getting the certification to produce Merbau GLULAM for
            construction base on Australian & New Zealand standard.
          </p>

          <p>
            Until today, PT Kayan Jaya Tanjung under the leadership of Wilyanto
            has never stop learning and experiencing the best new knowledge to
            produce the best timber products.
          </p>
        </div>
      </div>
    </Responsive>
  );
};

export default History;
