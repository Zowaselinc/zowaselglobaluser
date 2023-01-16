const DateUtils = {
  formatDateFromApi(dateString) {
    var splitter = dateString.split(" ");
    var date = splitter[0];
    var time = splitter[1];
    return {
      date: date,
      time: this.parseTime(time),
    };
  },

  parseTime(timeString) {
    var splitter = timeString.split(":");
    var suffix = Number(splitter[0]) > 12 ? "PM" : "AM";
    var hour12Format =
      Number(splitter[0]) > 12 ? Number(splitter[0]) - 12 : splitter[0];
    hour12Format =
      hour12Format.toString().length == 1
        ? "0" + hour12Format.toString()
        : hour12Format;
    return `${hour12Format}:${splitter[1]}${suffix}`;
  },
};

export default DateUtils;
