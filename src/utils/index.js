import Faker from 'faker';

const getFakeUnit = () => {
    return Faker.helpers.replaceSymbols('###');
};

const getFakeRef = () => {
    return Faker.helpers.replaceSymbols('?/###/####');
};

const getFakeName = () => {
    return Faker.lorem.sentence();
};

const getTableColumns = () => {
    return [
        {
            Header: "#",
            accessor: "sortOrder"
        },
        {
            Header: "Unit",
            accessor: "unit"
        },
        {
            Header: "Ref",
            accessor: "ref"
        },
        {
            Header: "Name",
            accessor: "name"
        },
    ];
};

const getTableData = (numRows = 20) => {

    let data = [];

    for (let i = 1; i <= numRows; i++) {
        data.push(
            {
                sortOrder: i,
                unit: getFakeUnit(),
                ref: getFakeRef(),
                name: getFakeName(),
            }
        )
    }

    return data;
};

/**
 * Moves array object from the given index to a given index
 * 
 * @param {Array} arr 
 * @param {Number} from 
 * @param {Number} to 
 */
const move = (arr, from, to) => {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
};

export {
    getTableData,
    getTableColumns,
    move
}