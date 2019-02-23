interface Shoe {
    label: string;
    size?: number;
}

const printShoe = (shoe: Shoe): number => {
    console.log(`${shoe.label} ${shoe.size || ''}`);
    return 1;
};

const shoe = {
    label: 'air jordan1',
    size: 10,
};

const shoe2 = {
    label: 'air jordan1',
    // size: 10,
};

printShoe(shoe);
printShoe(shoe2);
