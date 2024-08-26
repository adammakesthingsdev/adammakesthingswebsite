/**
 * Simple utility for displaying dates
 */

import { parseISO, format } from 'date-fns';



export default function BlogDate({ dateString }: { dateString: string; }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

/**
 * Converts a pocketbase time string to human-readable date in the format
 * "August 20, 1994".
 */
export function ExpandedDate({pbTime}:{pbTime:string}) {
    const time = new Date(pbTime);
    const dateFormat = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'long',
        //timeStyle: 'short',
        timeZone: 'EST',
    });
    return <time>{dateFormat.format(time)}</time>;
}