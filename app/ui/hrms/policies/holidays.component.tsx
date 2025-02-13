import { holidayData } from "@/app/lib/placeholder.data";
const DAYOFWEEK: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTHS: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const HolidaysComponent = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold">2025 Holidays List</h1>
            <div className="flex flex-wrap w-full">
                {
                    holidayData?.data.map((holidayEle) => {
                        return (
                            <div key={holidayEle.id} className="flex gap-4 items-center w-2/6 pt-4">
                                <div className="flex flex-col items-center border border-close-navbar rounded-md">
                                    <span className="flex bg-calendar-color justify-center border-b border-close-navbar pl-9 pr-9 pt-1 pb-1 rounded-t-md">{MONTHS[new Date(holidayEle.holiday_date).getMonth()]}</span>
                                    <span className="m-4 text-2xl text-primary-text-color font-mono font-[600]">{new Date(holidayEle.holiday_date).getDate()}</span>
                                </div>
                                <div className="flex flex-col items-start w-full">
                                    <span className="text-xl text-primary-text-color font-mono font-[600]">{holidayEle.holiday_reason}</span>
                                    <span className="text-sm text-week-day-color">{DAYOFWEEK[new Date(holidayEle.holiday_date).getDay()]}</span>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default HolidaysComponent;