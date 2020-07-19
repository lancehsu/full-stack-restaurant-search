"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStrToTime = void 0;
const strToDateProcess = (date) => {
    let output = {
        mon: { open: -1, close: -1 },
        tue: { open: -1, close: -1 },
        wed: { open: -1, close: -1 },
        thu: { open: -1, close: -1 },
        fri: { open: -1, close: -1 },
        sat: { open: -1, close: -1 },
        sun: { open: -1, close: -1 },
    };
    const dateArr = date.split('/').map((e) => e.trim());
    for (let i = 0; i < dateArr.length; i++) {
        const detailArr = dateArr[i].split(' ');
        output = Object.assign(Object.assign({}, output), getDateAndTime(detailArr));
    }
    return output;
};
const getDateAndTime = (detailArr) => {
    let isDate = true;
    let startDate = '';
    let dates = [];
    let startTime;
    let endTime;
    let output = {};
    const lowerDetailArr = detailArr.map((e) => e.toLowerCase());
    for (let i = 0; i < detailArr.length; i++) {
        if (isDate && !Number.isNaN(parseInt(lowerDetailArr[i][0]))) {
            isDate = false;
            continue;
        }
        if (isDate) {
            // * Date parsing
            if (lowerDetailArr[i] === '-') {
                startDate = correctDate(lowerDetailArr[i - 1]);
            }
            else if (lowerDetailArr[i].includes('-')) {
                const [from, to] = lowerDetailArr[i].split('-');
                const withoutStart = startEndDateProcess(correctDate(from), correctDate(to.endsWith(',') ? to.slice(0, -1) : to));
                dates.push(correctDate(from));
                dates = dates.concat(withoutStart);
            }
            else if (lowerDetailArr[i].endsWith(',')) {
                // * Check `mon,` type
                dates.push(correctDate(lowerDetailArr[i].slice(0, -1)));
            }
            else {
                // * `start-end` case
                if (startDate.length > 0) {
                    const withoutStart = startEndDateProcess(startDate, correctDate(lowerDetailArr[i]));
                    dates = dates.concat(withoutStart);
                }
                else {
                    dates.push(correctDate(lowerDetailArr[i]));
                }
            }
        }
        else {
            // * Time parsing
            if (lowerDetailArr[i] == '-') {
                startTime = exports.parseStrToTime(lowerDetailArr[i - 2], lowerDetailArr[i - 1] === 'am');
                endTime = exports.parseStrToTime(lowerDetailArr[i + 1], lowerDetailArr[i + 2] === 'am');
            }
        }
    }
    dates.forEach((date) => {
        output[date] = { open: startTime, close: endTime };
    });
    return output;
};
const correctDate = (input) => {
    switch (input) {
        case 'tues':
            return 'tue';
        case 'weds':
            return 'wed';
        case 'thurs':
            return 'thu';
        default:
            return input;
    }
};
const dateToNum = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 7,
};
const numToDate = {
    0: 'sun',
    1: 'mon',
    2: 'tue',
    3: 'wed',
    4: 'thu',
    5: 'fri',
    6: 'sat',
    7: 'sun',
};
const startEndDateProcess = (start, end) => {
    const output = [];
    let startNum = dateToNum[start];
    let endNum = dateToNum[end];
    // * If start === 'sun'
    if (startNum === 7)
        startNum = 0;
    for (let i = startNum + 1; i <= endNum; i++)
        output.push(numToDate[i]);
    return output;
};
exports.parseStrToTime = (time, isAm) => {
    const timeArr = time.split(':');
    let parsedTime = parseInt(timeArr[0]);
    if (parsedTime === 12)
        parsedTime = 0;
    if (timeArr.length > 1) {
        parsedTime += parseInt(timeArr[1]) / 60;
    }
    if (!isAm)
        parsedTime += 12;
    return parsedTime;
};
// const data0 = 'Mon-Sun 11 am - 10:30 pm'.split(' ');
// const data1 = 'Mon-Thu, Sun 11:30 am - 10 pm'.split(' ');
// const data2 = 'Mon - Tues 4:30 pm - 11:15 pm'.split(' ');
// console.log(getDateAndTime(data0));
// console.log(getDateAndTime(data1));
// console.log(getDateAndTime(data2));
// console.log(
//   strToDateProcess(
//     'Mon 8 am - 10:15 pm / Tues, Sun 5:45 am - 6:15 am / Weds 6:45 am - 1:45 am / Thurs 1:15 pm - 12:15 pm / Fri 9:45 am - 1:45 am / Sat 8:45 am - 7:45 pm'
//   )
// );
exports.default = strToDateProcess;
