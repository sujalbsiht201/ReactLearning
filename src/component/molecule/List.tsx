import { ListItem } from '../atomic/ListItem.tsx';
import { Input } from '../atomic/Input.tsx'


export const List = ({ list, onClick }) => {

    return <>
        {/*<Input label="Search Song.." value={value} onChange={onChange} />*/}

        <ul>
            {
                list.map((el, i) => {
                    return <ListItem key={i} el={el} onClick={onClick} />
                })
            }
        </ul>
    </>
}