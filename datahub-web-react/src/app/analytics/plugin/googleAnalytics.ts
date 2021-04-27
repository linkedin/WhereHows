import googleAnalytics from '@analytics/google-analytics';
import { Event, EventType } from '../event';
import analyticsConfig from '../../../conf/analytics';

const gaConfigs = analyticsConfig.googleAnalytics;
const isEnabled: boolean = gaConfigs || false;
const trackingId = isEnabled ? gaConfigs.trackingId : undefined;

const getLabelFromEvent = (event: Event) => {
    switch (event.type) {
        case EventType.BrowseResultClickEvent:
            return event.browsePath;
        case EventType.SearchEvent:
            return event.query;
        case EventType.EntitySectionViewEvent:
            return event.section;
        case EventType.EntityActionEvent:
            return event.action;
        default:
            return event.urn;
    }
};

/**
 * Init default GA plugin
 */
const googleAnalyticsPlugin = googleAnalytics({ trackingId });

/**
 * Lightweight wrapper on top of the default google analytics plugin
 * to transform DataHub Analytics Events into the Google Analytics event
 * format.
 */
const wrappedGoogleAnalyticsPlugin = {
    ...googleAnalyticsPlugin,
    track: ({ payload, config, instance }) => {
        const modifiedProperties = {
            label: getLabelFromEvent(payload.properties as Event),
            category: 'UserActions',
        };
        const modifiedPayload = {
            ...payload,
            properties: modifiedProperties,
        };
        return googleAnalyticsPlugin.track({
            payload: modifiedPayload,
            config,
            instance,
        });
    },
};

export default {
    isEnabled,
    plugin: isEnabled && wrappedGoogleAnalyticsPlugin,
};