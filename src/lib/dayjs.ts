import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/pt-br";

// Define a localização que será utilizada para formatar as datas
dayjs.locale("pt-br");
dayjs.extend(localizedFormat);

export {dayjs}