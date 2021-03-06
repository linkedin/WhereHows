import { Avatar, Button, Divider, Row, Space, Typography } from 'antd';
import React from 'react';
import { AuditStamp, ChartType, EntityType, Ownership } from '../../../../types.generated';
import { useEntityRegistry } from '../../../useEntityRegistry';
import CustomAvatar from '../../../shared/avatar/CustomAvatar';
import { capitalizeFirstLetter } from '../../../shared/capitalizeFirstLetter';

const styles = {
    content: { width: '100%' },
};

export type Props = {
    platform: string;
    description?: string | null;
    ownership?: Ownership | null;
    lastModified?: AuditStamp;
    externalUrl?: string | null;
    chartType?: ChartType | null;
};

export default function ChartHeader({ platform, description, ownership, externalUrl, lastModified, chartType }: Props) {
    const entityRegistry = useEntityRegistry();

    return (
        <Space direction="vertical" size={15} style={styles.content}>
            <Row justify="space-between">
                <Space split={<Divider type="vertical" />}>
                    <Typography.Text strong type="secondary">
                        {chartType ? `${capitalizeFirstLetter(chartType.toLowerCase())} ` : ''}Chart
                    </Typography.Text>
                    <Typography.Text strong type="secondary">
                        {capitalizeFirstLetter(platform.toLowerCase())}
                    </Typography.Text>
                    {externalUrl && (
                        <Button onClick={() => window.open(externalUrl || undefined, '_blank')}>
                            View in {capitalizeFirstLetter(platform)}
                        </Button>
                    )}
                </Space>
            </Row>
            <Typography.Paragraph>{description}</Typography.Paragraph>
            <Avatar.Group maxCount={6} size="large">
                {ownership?.owners?.map((owner: any) => (
                    <CustomAvatar
                        key={owner.owner.urn}
                        name={owner.owner.info?.fullName}
                        url={`/${entityRegistry.getPathName(EntityType.CorpUser)}/${owner.owner.urn}`}
                        photoUrl={owner.owner.editableInfo?.pictureLink}
                    />
                ))}
            </Avatar.Group>
            {lastModified && (
                <Typography.Text type="secondary">
                    Last modified at {new Date(lastModified.time).toLocaleDateString('en-US')}
                </Typography.Text>
            )}
        </Space>
    );
}
