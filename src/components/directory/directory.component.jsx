import React from 'react';
import MenuItem from '../menu-items/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title : 'hats',
                    imageUrl: 'https://picsum.photos/id/1009/200/300',
                    id: 1
                },
                {
                    title : 'jackets',
                    imageUrl: 'https://picsum.photos/id/1059/200/300',
                    id: 2
                },
                {
                    title : 'sneakers',
                    imageUrl: 'https://picsum.photos/id/1023/200/300',
                    id: 3
                },
                {
                    title : 'womens',
                    imageUrl: 'https://picsum.photos/id/1020/200/300',
                    size: 'large',
                    id: 4
                },
                {
                    title : 'mens',
                    imageUrl: 'https://picsum.photos/id/1021/200/300',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => 
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
                    )
                }
            </div>
        )
    }
}

export default Directory;