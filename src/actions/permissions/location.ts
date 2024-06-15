import {
  PERMISSIONS,
  PermissionStatus as RNPermissionsStatus,
  check,
  openSettings,
  request,
} from 'react-native-permissions';
import type {PermissionStatus} from '../../infrastructure/interfaces/permissions';
import {Platform} from 'react-native';

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    let status: RNPermissionsStatus = 'unavailable';
    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Platform not supported');
    }

    if (status === 'blocked') {
      await openSettings();
      return await checkLocationPermission();
    }

    const permissionMapper: Record<RNPermissionsStatus, PermissionStatus> = {
      granted: 'granted',
      denied: 'denied',
      blocked: 'blocked',
      limited: 'limited',
      unavailable: 'unavailable',
    };

    return permissionMapper[status] ?? 'unavailable';
  };

export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  let status: RNPermissionsStatus = 'unavailable';
  if (Platform.OS === 'ios') {
    status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Platform not supported');
  }

  const permissionMapper: Record<RNPermissionsStatus, PermissionStatus> = {
    granted: 'granted',
    denied: 'denied',
    blocked: 'blocked',
    limited: 'limited',
    unavailable: 'unavailable',
  };

  return permissionMapper[status] ?? 'unavailable';
};
