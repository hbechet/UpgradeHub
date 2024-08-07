export default function InputSex() {
    return (
        <div>
            Sex: <input type="radio" name="sex" id="sex-h" value="h" /> <label for="sexo-h">male</label>
            <input type="radio" name="sex" id="sex-m" value="m" /> <label for="sex-m">female</label>
        </div>
    );
}