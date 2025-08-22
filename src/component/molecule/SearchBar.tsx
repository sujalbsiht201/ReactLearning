import { Input } from '../atomic/Input';
import { Button } from '../atomic/Button';
import { Label } from '../atomic/Label';


export const SearchBar = ({ value, placeholder, onChange, onAdd }) => (
    <div className="flex flex-col gap-2 w-full bg-white">
        <div className="flex flex-col">
            <Label text={'Todo List'}/>
        </div>
        <div className="flex mr-2">
            <Input value={value} onChange={onChange} placeholder={placeholder} />
            <Button label="Add" onClick={onAdd} />
        </div>
    </div>
);