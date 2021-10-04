import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const preloadBetaDate = "2021-10-05 07:00:00";
const earlyAccessdBetaStartDate = "2021-10-06 07:00:00";
const normalBetaStartDate = "2021-10-08 07:00:00";
const betaEndDate = "2021-10-10 07:00:00";

const preloadTime = dayjs.utc(preloadBetaDate).local().format();
const earlyAccessTime = dayjs.utc(earlyAccessdBetaStartDate).local().format();
const normalTime = dayjs.utc(normalBetaStartDate).local().format();
const endTime = dayjs.utc(betaEndDate).local().format();

export { preloadTime, earlyAccessTime, normalTime, endTime };
