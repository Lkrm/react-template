import React, {ReactComponentElement} from 'react';

type GridTypes = {
    columns: Array<{ name: string, children: string | ReactComponentElement<any> }>,
    data: {
        entities: any,
        result: Array<number>,
        count: number,
        hasMore: boolean,
    },
    options: {
        loadingType: 'infinityScroll' | 'pagination' | 'loadMore',
    }
}

const TableItem = ({ data, columns }) => (<tr>
    {
        columns.map(({ name }) => (<td key={name}>{data[name]}</td>))
    }
</tr>);

const Grid = ({ columns, data, options }: GridTypes ) => (
    <div className="grid">
        <table className="table table-bordered">
            <thead>
                {
                    columns.map(({ name, children}) => <th key={name}>{children}</th>)
                }
            </thead>
            <tbody>
            {
                data.result.map((itemId) => (
                    <TableItem key={itemId} columns={columns} data={data.entities[itemId]} />
                ))
            }
            </tbody>
        </table>
    </div>
)

export default Grid;
