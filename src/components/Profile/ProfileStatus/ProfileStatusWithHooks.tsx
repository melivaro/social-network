import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: FC<PropsType> = (
    {
        status,
        updateStatus
    }
) => {
    const [editMode, setEditMode] = useState(false)
    const [localStatus, setLocalStatus] = useState(status)

    useEffect(() => {
        setLocalStatus(status)
    },[status])

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(localStatus)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => setLocalStatus(e.currentTarget.value)

    return (
        <div>

            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || "no status"}</span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onChangeStatus} value={localStatus} type="text"
                       onBlur={deactivateEditMode} autoFocus/>
            </div>}

        </div>
    );
};