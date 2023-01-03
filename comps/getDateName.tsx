export function getDateName(dateString:any) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const year=date.getFullYear();
    const day=date.getUTCDate();
    return months[monthIndex]+" "+day+", "+year;
  }