import {useEffect, useState} from 'react'
import {config, schema} from '../store/config'

type Schema = typeof schema;

export function useConfig<K extends keyof Schema> (key: K): Schema[K]['default'] {
  const defaultValue = config.get(key, schema[key].default) as Schema[K]['default']
  const [value, setValue] = useState<Schema[K]['default']>(defaultValue)

  useEffect(() => {
    return config.onDidChange(key, (newValue) => {
      setValue(newValue as Schema[K]['default'])
    })
  }, [])

  return value
}
