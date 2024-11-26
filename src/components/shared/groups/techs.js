import { HomeIcons } from "../icons/homeIcon"

export const Techs = ({icons}) => {
    return (
        <>
        {icons.map((item, index) =>{
            return (
                <HomeIcons key={index} source={item.icon}></HomeIcons>
            );
        })}
        </>
    );
}