import { AnimatePresence, motion } from "framer-motion";
import { Skeleton } from "primereact/skeleton";

const WeatherLoading = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex flex-col gap-y-4 justify-between bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-10 border-white  p-6 shadow-2xl text-white mx-4 w-[250px] 2xl:w-[500px] md:w-[400px] sm:w-[300px] h-[240px] 2xl:h-[300px] lg:h-[260px] sm:h-[250px] rounded-3xl"
      >
        <Skeleton width="100%" height="40px" className="mb-2"></Skeleton>
        <Skeleton width="30%" height="30px" className="mb-2"></Skeleton>
        <Skeleton width="70%" height="20px" className="mb-2"></Skeleton>
        <Skeleton width="60%" height="70px" className="mb-2"></Skeleton>
      </motion.div>
    </AnimatePresence>
  );
};

export default WeatherLoading;
