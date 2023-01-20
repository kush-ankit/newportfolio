
import React,{useRef} from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import './SpeedDialDemo.css'

export const SpeedDialDemo = () => {

    const toast = useRef(null);

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];

    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                <h5>Circle, Semi-Circle and Quarter-Circle</h5>
                <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
                    <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
                    <SpeedDial model={items} radius={80} direction="up" type="semi-circle"  />
                    <SpeedDial model={items} radius={80} direction="down" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="left" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="right" type="semi-circle" />
                   </div>
            </div>
        </div>
    )
}
                 