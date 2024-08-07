import InputSex from './InputSex';
import InputCity from './InputCity';
import InputDescription from './InputDescription';
import Checkbox from './Checkbox';
import Submit from './Submit';
import Input from './Input';

export default function Form() {
    return (
        <form action="" method="get" className='form'>
            <Input name="Name" />
            <Input name="Surname" />
            <InputSex />
            <Input name="Email" />
            <InputCity />
            <InputDescription />
            <Checkbox name="subscribe" text="I want to subscribe to your newsletter." />
            <Checkbox name="t&c" text="I accept your Terms & Conditions." />
            <Submit />
        </form>
    );
}