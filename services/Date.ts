import dayjs from "dayjs";
import config from '../config.json';

export const getDateNow = () => dayjs().format(config.dateFormat);