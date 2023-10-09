import {
    AcademicCapIcon, ArrowDownIcon,
    BuildingLibraryIcon,
    FlagIcon,
    GiftIcon,
    HeartIcon,
    PowerIcon,
    SunIcon,
    UserIcon
} from "@heroicons/react/24/solid";

export function TypeIcon({name}) {
    let IconComponent;

    switch (name) {
        case 'normal':
            IconComponent = SunIcon;
            break;
        case 'fighting':
            IconComponent = BuildingLibraryIcon;
            break;
        case 'flying' :
            IconComponent = FlagIcon;
            break;
        case 'poison':
            IconComponent = PowerIcon;
            break;
        case 'ground':
            IconComponent = GiftIcon;
            break;
        case 'rock':
            IconComponent = UserIcon;
            break;
        case 'bug':
            IconComponent = HeartIcon;
            break;
        case 'ghost':
            IconComponent = AcademicCapIcon;
            break;
        case 'steel':
            IconComponent = ArrowDownIcon;
            break;
        case 'fire':
            IconComponent = ArrowDownIcon;
            break;
        case 'water':
            IconComponent = ArrowDownIcon;
            break;
        case 'grass':
            IconComponent = ArrowDownIcon;
            break;
        case 'electric':
            IconComponent = ArrowDownIcon;
            break;
        case 'psychic':
            IconComponent = ArrowDownIcon;
            break;
        case 'ice':
            IconComponent = ArrowDownIcon;
            break;
        case 'dragon':
            IconComponent = ArrowDownIcon;
            break;
        case 'dark' :
            IconComponent = ArrowDownIcon;
            break;
        case 'fairy':
            IconComponent = ArrowDownIcon;
            break;
        case 'unknown':
            IconComponent = ArrowDownIcon;
            break;
        case 'shadow':
            IconComponent = ArrowDownIcon;
            break;
        default:
            IconComponent = ArrowDownIcon;
            break;

    }
    const DynamicIcon = IconComponent; // Asigna el componente a una variable

    return <DynamicIcon className="w-5 h-5 text-inherit"/>;


}

export default TypeIcon;



