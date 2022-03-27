/*
You are given an array of a journey in London, UK. 
The array will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']
Journeys will always only contain a combination of tube names and bus numbers. 
Each tube journey costs £2.40 and each bus journey costs £1.50. 
If there are 2 or more adjacent bus journeys, the bus fare is capped for sets 
of two adjacent buses and calculated as one bus fare for each set.

Your task is to calculate the total cost of the journey and return the cost 
rounded to 2 decimal places in the format (where x is a number): £x.xx

Test.assertEquals(londonCityHacker([12, 'Central', 'Circle', 21]), "£7.80");
Test.assertEquals(londonCityHacker(['Piccidilly', 56]), "£3.90");
Test.assertEquals(londonCityHacker(['Northern', 'Central', 'Circle']), "£7.20");
Test.assertEquals(londonCityHacker(['Piccidilly', 56, 93, 243]), "£5.40");
Test.assertEquals(londonCityHacker([386, 56, 1, 876]), "£3.00");
Test.assertEquals(londonCityHacker([]), "£0.00");
*/

function londonCityHacker(journey) {
    let sum = 0;
    for (let i = 0; i < journey.length; i++) {
        if (typeof journey[i] === "string") {
            sum += 2.40;
        } else if (typeof journey[i] && typeof journey[i + 1] === "number") {
            sum += 1.50;
            i++;
        } else if (typeof journey[i] === "number") {
            sum += 1.50;
        }
    }
    return '£' + sum.toFixed(2);
}

//top

function londonCityHacker(journey) {
    let sum = 0;

    for (let i = 0; i < journey.length; i++) {
        if (typeof journey[i] === "string") sum += 2.40;
        else {
            sum += 1.50;
            if (typeof journey[i + 1] === "number") i++;
        }
    }

    return `£${sum.toFixed(2)}`;
}

//top2

const londonCityHacker = (j, a = []) => {
    j.forEach((e, i) => a.push(e[0] ? 2.4 : i && e === +e && a[i - 1] == 1.5 ? 0 : 1.5));
    return '£' + a.reduce((a, b) => a + b, 0).toFixed(2);
}

  