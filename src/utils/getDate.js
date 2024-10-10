export default function dateCreate() {
    const date = new Date();

    const day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
    const mounth = (date.getMonth() + 1).toString().length === 1 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const year = date.getFullYear().toString().substring(2);

    console.log("CREATE_DATE_FOR_GET_TOKEN >> ", day.toString() + mounth.toString() + year.toString());

    return day.toString() + mounth.toString() + year.toString();
}