import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Loader} from "../../common/Loader/Loader";

type PropsType = {
    statusObj: {status: string}
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: FC<PropsType> = React.memo( (
    {
        statusObj,
        updateStatus
    }
) => {
    const [editMode, setEditMode] = useState(false)
    const [localStatus, setLocalStatus] = useState(statusObj.status)
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(false)
    },[statusObj])


    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setLoader(true)
        setEditMode(false)
        updateStatus(localStatus)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => setLocalStatus(e.currentTarget.value)

    if(loader){
        console.log('Status Loader')
        return <Loader/>
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{statusObj.status || "no status"}</span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onChangeStatus} value={localStatus} type="text"
                       onBlur={deactivateEditMode} autoFocus/>
            </div>}
        </div>
    );
} )