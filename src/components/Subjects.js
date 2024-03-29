import React, { Component } from 'react';

class Subjects extends Component {
    state = {
        subjects: [
            {
                id: 1,
                title: "רשלנות רפואית",
                img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
                text: 'לגשת לקבלת טיפול רפואי ולצאת במצב בריאותי גרוע יותר מזה שהיה לו קודם זהו חלום בלהות של כל בן אדם. לצערנו, המקרים האלה קורים. טיפול רפואי לא נכון, אבחנה לא מדויקת, העדר הפניה לבדיקות נחוצות, עיכוב במתן הטיפול הנדרש – כל אלה יכולים לסכן בצורה חמורה את בריאותו של בן אדם, לגרום לו סבל פיזי ונפשי ואף להוביל לנכות זמנית או קבוע ואפילו למוות. מקרים מצערים כאלה דורשים לא רק בירור מצד אותו מוסד רפואי בו התרחש הדבר, ונקיטת כל הצעדים האפשריים למניעת הישענות של מקרים דומים, אלא גם תשלום פיצויים לאותו אדם שנפל קורבן לרשלנות רפואית. עבור אותו אדם משמעותה של הרשלנות הרפואית היא ירידה דרסטית באיכות החיים, פגיעה בכושר העבודה, אובדן שעות העבודה על ידיו ועל ידי בני משפחתו שצריכים לטפל בו, טיפולים רפואיים נוספים לתיקון נזקי הרשלנות ועוגמת נפש עצומה.'
            },

            {
                id: 2,
                title: "תאונות עבודה",
                img: "http://gabi.wdev.co.il/wp-content/uploads/2017/12/%D7%AA%D7%90%D7%95%D7%A0%D7%AA-%D7%A2%D7%91%D7%95%D7%93%D7%94.jpg",
                text: "העבודה מהווה חלק ניכר מחיינו, אנחנו מבלים בה שעות רבות מדי יום. ולא מן הנמנע שבמקום בו אנחנו שוהים כל כך הרבה, אנחנו עלולים גם להיפצע. במידה והפגיעה התרחשה תוך כדי ועקב העבודה, או אפילו בדרך לעבודה וממנה, יש לשקול להגיש תביעה לפיצוי בגין תאונת עבודה. אך כמובן לא כל פציעה בעבודה תחשב לתאונת עבודה. על מנת שתוכר ככזאת יש צורך להוכיח שהתרשלותו של המעסיק או העדר תנאי עבודה הולמים הם אלה שהובילו לפגיעה. מכאן קל להסיק שהצלחת התביעה תלויה ביכולתו של עורך הדין המנהל את התיק להוכיח את אחריות המעסיק לפגיעה ואת הנזק שנגרם כתוצאה מהתאונה. הוכחת הסעיפים האלה כמובן אינו דבר של מה בכך, ולעיתים רק עורך דין מנוסה מסוגל לבנות את התיק ולנהל אותו בצורה שבאמת מאפשרת ללקוח לקבל את מלוא הפיצוי המגיע לו."
            }, {
                id: 3,
                title: "תביעות נזיקין",
                img: "http://gabi.wdev.co.il/wp-content/uploads/2017/12/%D7%A0%D7%96%D7%99%D7%A7%D7%99%D7%9F-%D7%9B%D7%9C%D7%9C%D7%99.jpg",
                text: "דרישה לפיצוי על הנזק שנגרם בידי אדם אחר זוהי אחת התלונות הנפוצות והברורות לנו ביותר. אם מישהו פגע בנו, נרצה שיפצה אותנו על הנזק שנגרם לנו. מגוון סוגי העווילות עליהן ניתן להגיש תביעה הוא רחב ביותר: תקיפה, הפרת חוקה חקוקה, כליאת שווא, הסגת גבול וכמובן נזק לגוף ולרכוש. על פי דיני נזיקין מגיע לאדם פיצוי, אפילו אם הנזק נגרם בשוגג, אך מתוך רשלנות. אך גם מגבלות על הזכות להגיש תביעה והיכולת לקבל פיצויים לא מבוטלות, והן כוללות בין היתר מצב בו מי שספג את הנזק הסתכן מרצונו וחשף את עצמו ואת רכושו לנזק, מצב בו הנזק נגרם עי עובד ציבור במסגרת תפקידו ולא במזיד, נזק מזערי שלא מצדיק תביעה ועוד ועוד.כל אלה הופכים תביעת נזיקין וניהול תיק נזיקין למשימה מורכבת, וקבלת פיצויים מירביים שמגיעים לתובע נהיית אתגר לא פשוט, שמצריך מעורך הדין ניסיון וכישורים רבים. "
            },
            {
                id: 4,
                title: "תאונות דרכים",
                img: "http://gabi.wdev.co.il/wp-content/uploads/2017/12/CAR3.jpg",
                text: "הקטל בדרכים הוא אחד הדברים הקשים ביותר שהמדינה שלנו מתמודדת אתם. מדי יום אנשים נפגעים בתאונות דרכים ברחבי הארץ. חשוב לדעת שלנפגעי תאונות הדרכים מגיע פיצוי לפי החוק, גם אם תאונת הדרכים נגרמה באשמתם, אך כמובן לא במקרים בהם התאונה נגרמה במזיד. נהג, נוסע או הולך רגל שנפגע בתאונת דרכים זכאי לטעון לפיצויים בגין נזקים גופניים מהתאונה, וברוב המקרים אין על זה עוררין. אך גובה הפיצוי משתנה מאוד ממקרה למקרה, ולא בהכרח הוא תלוי בנזק האמתי שנגרם לבן אדם שנפגע בתאונה. בחלק לא מבוטל מהמקרים אדם שספג נזק חמור מקבל פיצוי מינימאלי בלבד, וזאת בשל פניה מאוחרת לעורך הדין המתמחה בניהול תיקי נזיקין מסוג זה."
            }
        ]
    }
    render() {
        const subjects =
            <div className='subjects-container' id='subjects-container'>

                {this.state.subjects.map((subject) => {
                    return (
                        <div key={subject.id} className='subject-card'>
                            <h3 className='subject-title'>{subject.title}</h3>
                            <img src={subject.img} alt="" className="subject-img" />
                            <p className="subject-text">

                                {subject.text.length < 120 ? `${subject.text}` : `${subject.text.substring(0, 120)}...`}
                            </p>
                            <button className='subject-btn'>מידע נוסף</button>
                        </div>
                    )
                })}
            </div>
        return (
            <div>{subjects}</div>


        );
    }
}

export default Subjects;